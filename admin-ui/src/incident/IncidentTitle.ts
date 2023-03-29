import { Incident as TIncident } from "../api/incident/Incident";

export const INCIDENT_TITLE_FIELD = "name";

export const IncidentTitle = (record: TIncident): string => {
  return record.name || String(record.id);
};
