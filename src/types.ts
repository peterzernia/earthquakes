export type Earthquake = {
  geometry: {
    coordinates: number[];
    type: string;
  };
  id: string;
  properties: {
    code: string;
    detail: string;
    ids: string;
    mag: number;
    magType: string;
    net: string;
    place: string;
    rms: number;
    sig: number;
    sources: string;
    status: string;
    time: number;
    title: string;
    tsunami: number;
    type: string;
    types: string;
    updated: number;
    url: string;
  };
  type: string;
}

export type EarthquakeData = {
  bbox: number[];
  features: Earthquake[];
  metadata: {
    api: string;
    count: number;
    generated: number;
    status: number;
    title: string;
    url: string;
  };
  type: string;
}

export type Period = 'day' | 'week' | 'month'
