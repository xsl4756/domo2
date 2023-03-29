/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Incident, User } from "@prisma/client";

export class IncidentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IncidentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentFindManyArgs>
  ): Promise<number> {
    return this.prisma.incident.count(args);
  }

  async findMany<T extends Prisma.IncidentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentFindManyArgs>
  ): Promise<Incident[]> {
    return this.prisma.incident.findMany(args);
  }
  async findOne<T extends Prisma.IncidentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentFindUniqueArgs>
  ): Promise<Incident | null> {
    return this.prisma.incident.findUnique(args);
  }
  async create<T extends Prisma.IncidentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentCreateArgs>
  ): Promise<Incident> {
    return this.prisma.incident.create<T>(args);
  }
  async update<T extends Prisma.IncidentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentUpdateArgs>
  ): Promise<Incident> {
    return this.prisma.incident.update<T>(args);
  }
  async delete<T extends Prisma.IncidentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncidentDeleteArgs>
  ): Promise<Incident> {
    return this.prisma.incident.delete(args);
  }

  async getUserId(parentId: string): Promise<User | null> {
    return this.prisma.incident
      .findUnique({
        where: { id: parentId },
      })
      .userId();
  }
}