/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { StudentWhereUniqueInput } from "./StudentWhereUniqueInput";
import { StudentUpdateInput } from "./StudentUpdateInput";

@ArgsType()
class UpdateStudentArgs {
  @Field(() => StudentWhereUniqueInput, { nullable: false })
  where!: StudentWhereUniqueInput;
  @Field(() => StudentUpdateInput, { nullable: false })
  data!: StudentUpdateInput;
}

export { UpdateStudentArgs as UpdateStudentArgs };
