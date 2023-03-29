import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IncidentService } from "./incident.service";
import { IncidentControllerBase } from "./base/incident.controller.base";

@swagger.ApiTags("incidents")
@common.Controller("incidents")
export class IncidentController extends IncidentControllerBase {
  constructor(
    protected readonly service: IncidentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
