/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TestService } from "../test.service";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TestCreateInput } from "./TestCreateInput";
import { TestWhereInput } from "./TestWhereInput";
import { TestWhereUniqueInput } from "./TestWhereUniqueInput";
import { TestFindManyArgs } from "./TestFindManyArgs";
import { TestUpdateInput } from "./TestUpdateInput";
import { Test } from "./Test";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TestControllerBase {
  constructor(
    protected readonly service: TestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @Public()
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Test })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TestCreateInput): Promise<Test> {
    return await this.service.create({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        date: true,
        state: true,
        test: true,
        testMultiLineText: true,
        testWholeNumber: true,
        testDecimalNUmber: true,
        testDateTime: true,
        testBoolean: true,
        testJson: true,
        testOptionSet: true,
        testMultiSelectOptionSet: true,
        testGeographicLocation: true,
        testCreateAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Test] })
  @ApiNestedQuery(TestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Test[]> {
    const args = plainToClass(TestFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        date: true,
        state: true,
        test: true,
        testMultiLineText: true,
        testWholeNumber: true,
        testDecimalNUmber: true,
        testDateTime: true,
        testBoolean: true,
        testJson: true,
        testOptionSet: true,
        testMultiSelectOptionSet: true,
        testGeographicLocation: true,
        testCreateAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        date: true,
        state: true,
        test: true,
        testMultiLineText: true,
        testWholeNumber: true,
        testDecimalNUmber: true,
        testDateTime: true,
        testBoolean: true,
        testJson: true,
        testOptionSet: true,
        testMultiSelectOptionSet: true,
        testGeographicLocation: true,
        testCreateAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @Public()
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TestWhereUniqueInput,
    @common.Body() data: TestUpdateInput
  ): Promise<Test | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          date: true,
          state: true,
          test: true,
          testMultiLineText: true,
          testWholeNumber: true,
          testDecimalNUmber: true,
          testDateTime: true,
          testBoolean: true,
          testJson: true,
          testOptionSet: true,
          testMultiSelectOptionSet: true,
          testGeographicLocation: true,
          testCreateAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Test })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TestWhereUniqueInput
  ): Promise<Test | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          date: true,
          state: true,
          test: true,
          testMultiLineText: true,
          testWholeNumber: true,
          testDecimalNUmber: true,
          testDateTime: true,
          testBoolean: true,
          testJson: true,
          testOptionSet: true,
          testMultiSelectOptionSet: true,
          testGeographicLocation: true,
          testCreateAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
