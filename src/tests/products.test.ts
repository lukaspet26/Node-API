import request from "supertest";
import {app} from "../server";

describe("Products testing", () => {
    it("Should return all products", () => {
        return request(app).get("/products").expect("Content-Type", /json/).expect(200).then((response) => {
            console.log(response.body)
        })
    });


    it("GET one product with id if id not found return 404", () => {
        return request(app).get("/product/:id").expect(302);
    });


    it("CREATE new product", () => {
        return request(app).post("/products").expect({
            name: "TEST NAME",
            description: "TEST DESCRIPTION",
            price: "1000",
            image: null
        }).expect("Content-Type", /json/).expect(201);
    });
})