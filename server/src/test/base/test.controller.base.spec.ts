import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TestController } from "../test.controller";
import { TestService } from "../test.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  date: new Date(),
  state: "exampleState",
  test: "exampleTest",
  testMultiLineText: 42,
  testWholeNumber: 42.42,
  testDecimalNUmber: new Date(),
  testDateTime: new Date(),
  testJson: "exampleTestJson",
  testOptionSet: "exampleTestOptionSet",
  testMultiSelectOptionSet: "exampleTestMultiSelectOptionSet",
  testGeographicLocation: new Date(),
  testCreateAt: "exampleTestCreateAt",
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  date: new Date(),
  state: "exampleState",
  test: "exampleTest",
  testMultiLineText: 42,
  testWholeNumber: 42.42,
  testDecimalNUmber: new Date(),
  testDateTime: new Date(),
  testJson: "exampleTestJson",
  testOptionSet: "exampleTestOptionSet",
  testMultiSelectOptionSet: "exampleTestMultiSelectOptionSet",
  testGeographicLocation: new Date(),
  testCreateAt: "exampleTestCreateAt",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    date: new Date(),
    state: "exampleState",
    test: "exampleTest",
    testMultiLineText: 42,
    testWholeNumber: 42.42,
    testDecimalNUmber: new Date(),
    testDateTime: new Date(),
    testJson: "exampleTestJson",
    testOptionSet: "exampleTestOptionSet",
    testMultiSelectOptionSet: "exampleTestMultiSelectOptionSet",
    testGeographicLocation: new Date(),
    testCreateAt: "exampleTestCreateAt",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  date: new Date(),
  state: "exampleState",
  test: "exampleTest",
  testMultiLineText: 42,
  testWholeNumber: 42.42,
  testDecimalNUmber: new Date(),
  testDateTime: new Date(),
  testJson: "exampleTestJson",
  testOptionSet: "exampleTestOptionSet",
  testMultiSelectOptionSet: "exampleTestMultiSelectOptionSet",
  testGeographicLocation: new Date(),
  testCreateAt: "exampleTestCreateAt",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Test", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TestService,
          useValue: service,
        },
      ],
      controllers: [TestController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /tests", async () => {
    await request(app.getHttpServer())
      .post("/tests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        testDecimalNUmber: CREATE_RESULT.testDecimalNUmber.toISOString(),
        testDateTime: CREATE_RESULT.testDateTime.toISOString(),
        testGeographicLocation:
          CREATE_RESULT.testGeographicLocation.toISOString(),
      });
  });

  test("GET /tests", async () => {
    await request(app.getHttpServer())
      .get("/tests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          testDecimalNUmber:
            FIND_MANY_RESULT[0].testDecimalNUmber.toISOString(),
          testDateTime: FIND_MANY_RESULT[0].testDateTime.toISOString(),
          testGeographicLocation:
            FIND_MANY_RESULT[0].testGeographicLocation.toISOString(),
        },
      ]);
  });

  test("GET /tests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        testDecimalNUmber: FIND_ONE_RESULT.testDecimalNUmber.toISOString(),
        testDateTime: FIND_ONE_RESULT.testDateTime.toISOString(),
        testGeographicLocation:
          FIND_ONE_RESULT.testGeographicLocation.toISOString(),
      });
  });

  test("POST /tests existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/tests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        testDecimalNUmber: CREATE_RESULT.testDecimalNUmber.toISOString(),
        testDateTime: CREATE_RESULT.testDateTime.toISOString(),
        testGeographicLocation:
          CREATE_RESULT.testGeographicLocation.toISOString(),
      })
      .then(function () {
        agent
          .post("/tests")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
