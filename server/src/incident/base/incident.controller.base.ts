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
import { IncidentService } from "../incident.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IncidentCreateInput } from "./IncidentCreateInput";
import { IncidentWhereInput } from "./IncidentWhereInput";
import { IncidentWhereUniqueInput } from "./IncidentWhereUniqueInput";
import { IncidentFindManyArgs } from "./IncidentFindManyArgs";
import { IncidentUpdateInput } from "./IncidentUpdateInput";
import { Incident } from "./Incident";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IncidentControllerBase {
  constructor(
    protected readonly service: IncidentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Incident })
  @nestAccessControl.UseRoles({
    resource: "Incident",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: IncidentCreateInput): Promise<Incident> {
    return await this.service.create({
      data: {
        ...data,

        userId: data.userId
          ? {
              connect: data.userId,
            }
          : undefined,
      },
      select: {
        name: true,
        incidentType: true,
        time: true,
        state: true,
        isread: true,
        arguments: true,
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Incident] })
  @ApiNestedQuery(IncidentFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Incident",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Incident[]> {
    const args = plainToClass(IncidentFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        name: true,
        incidentType: true,
        time: true,
        state: true,
        isread: true,
        arguments: true,
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Incident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Incident",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: IncidentWhereUniqueInput
  ): Promise<Incident | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        name: true,
        incidentType: true,
        time: true,
        state: true,
        isread: true,
        arguments: true,
        id: true,
        createdAt: true,
        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Incident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Incident",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: IncidentWhereUniqueInput,
    @common.Body() data: IncidentUpdateInput
  ): Promise<Incident | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          userId: data.userId
            ? {
                connect: data.userId,
              }
            : undefined,
        },
        select: {
          name: true,
          incidentType: true,
          time: true,
          state: true,
          isread: true,
          arguments: true,
          id: true,
          createdAt: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Incident })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Incident",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: IncidentWhereUniqueInput
  ): Promise<Incident | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          name: true,
          incidentType: true,
          time: true,
          state: true,
          isread: true,
          arguments: true,
          id: true,
          createdAt: true,
          updatedAt: true,

          userId: {
            select: {
              id: true,
            },
          },
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
