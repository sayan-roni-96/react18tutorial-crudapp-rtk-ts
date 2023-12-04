export interface WorkerModel {
    workername:  string;
    age:         string;
    gender:      string;
    favplayer:   string;
    performance: string;
    interest:    Interest[];
    id:          string;
}

export interface Interest {
    value: string;
    label: string;
}