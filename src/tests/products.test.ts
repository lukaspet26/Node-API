import request from "supertest";
import {app} from "../server";

describe("Products testing", () => {
    it("Should return all products", () => {
        return request(app).get("/products").expect("Content-Type", /json/).expect(200).then((response) => {
            console.log(response.body)
        })
    });


    it("GET one product with id if id not found return 404", () => {
        
    });


    it("CREATE new product", () => {

    });
})