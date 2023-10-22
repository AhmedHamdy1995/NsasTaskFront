import { Statuses } from "../../enums/statuses";

export interface NsasTaskFilters {
  stringfilters?: string;
  status?: Statuses;
}
