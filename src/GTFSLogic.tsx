import { transit_realtime } from 'gtfs-realtime-bindings';

interface ApiResponse {
  ok: boolean;
  url: string;
  status: number;
  statusText: string;
  arrayBuffer(): Promise<ArrayBuffer>;
}

// Main function to fetch and process GTFS-realtime data
export const fetchVehiclePositions = async (): Promise<void> => {
  try {
    const response: Response = await fetch(
      "https://webapps.regionofwaterloo.ca/api/grt-routes/api/vehiclepositions", 
      {
        headers: {
          // replace with your GTFS-realtime source's auth token
          // e.g. x-api-key is the header value used for NY's MTA GTFS APIs
        },
      }
    );

    if (!response.ok) {
      const error = new Error(`${response.url}: ${response.status} ${response.statusText}`);
      throw error;
    }

    const buffer: ArrayBuffer = await response.arrayBuffer();
    const feed: transit_realtime.FeedMessage = transit_realtime.FeedMessage.decode(
      new Uint8Array(buffer)
    );

    feed.entity.forEach((entity) => {
      if (entity.tripUpdate) {
        console.log(entity.tripUpdate);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Execute the function
fetchVehiclePositions();