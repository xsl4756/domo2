import { Module } from "@nestjs/common";
import { IncidentModuleBase } from "./base/incident.module.base";
import { IncidentService } from "./incident.service";
import { IncidentController } from "./incident.controller";
import { IncidentResolver } from "./incident.resolver";

@Module({
  imports: [IncidentModuleBase],
  controllers: [IncidentController],
  providers: [IncidentService, IncidentResolver],
  exports: [IncidentService],
})
export class IncidentModule {}
