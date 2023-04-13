import { Student as TStudent } from "../api/student/Student";

export const STUDENT_TITLE_FIELD = "id";

export const StudentTitle = (record: TStudent): string => {
  return record.id || String(record.id);
};
