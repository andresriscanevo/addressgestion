export class Gaddress {
  address_id: number;
  way_type: {
    way_type_id: number;
    way_type_name: string;
    way_type_code: string;
  };
  place_type: {
    place_type_id: number;
    place_type_name: string;
    place_type_code: string;
  };
  way_main: string;
  way_secondary: string;
  address_txt: string;
  building: string;
  place_name: string;
  latitude: number;
  longitude: number;
  zona_name: string;
  city_name: string;
}
