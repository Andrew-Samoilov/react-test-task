export interface Rocket {
    id: string;
    name: string;
    flickr_images: string[];
    height_w_trunk: {
        meters: number;
        feet: number;
    };
    diameter: {
        meters: number;
        feet: number;
    };
    return_payload_vol: {
        cubic_meters: number;
        cubic_feet: number;
    };
    trunk: {
        trunk_volume: {
            cubic_meters: number;
            cubic_feet: number;
        }
    };
    launch_payload_mass: {
        kg: number;
        lb: number;
    };
    return_payload_mass: {
        kg: number;
        lb: number;
    };
}

export interface MappedData {
    id: string;
    name: string;
    imgUrl: string;
    index: number;
}
