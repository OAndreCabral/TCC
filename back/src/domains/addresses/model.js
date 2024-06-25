import { Model } from "objection";

class Address extends Model {
    static get tableName() {
        return "address";
    }

    static get idColumn() {
        return "id";
    }
}

export default Address;
