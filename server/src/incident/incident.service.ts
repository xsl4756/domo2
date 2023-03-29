import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncidentServiceBase } from "./base/incident.service.base";

@Injectable()
export class IncidentService extends IncidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
