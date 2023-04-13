import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TestResolverBase } from "./base/test.resolver.base";
import { Test } from "./base/Test";
import { TestService } from "./test.service";
import { DeleteTestArgs } from "./base/DeleteTestArgs";
import { isRecordNotFoundError } from "../prisma.util";
import * as apollo from "apollo-server-express";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Test)
export class TestResolver extends TestResolverBase {
  constructor(
    protected readonly service: TestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }


  @graphql.Mutation(() => Test)
  @nestAccessControl.UseRoles({
    resource: "Test",
    action: "delete",
    possession: "any",
  })
  async addmethod(@graphql.Args() args: DeleteTestArgs): Promise<Test | null> {
    try {
      
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
