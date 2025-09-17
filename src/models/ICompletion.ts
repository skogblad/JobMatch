export interface ICompletion {
  value: string;
  found_phrase: string;
  type: string;
  occurrences: number;
}

export interface ICompletionResponse {
  typeahead: ICompletion[];
  result_time_in_millis: number;
  time_in_millis: number;
}
