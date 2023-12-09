export interface WorkerModel {
    workername?:  string;
    age?:         string;
    gender?:      string;
    favplayer?:   string;
    performance?: string;
    interest?:    Interest[];
    active?: boolean;
    id?:          string | any;
}

export interface Interest {
    value: string;
    label: string;
}

export interface AddWorkerModel {
    workername: string;
    age: string;
    favplayer: string;
    active: boolean;
    id: string | any;
  };