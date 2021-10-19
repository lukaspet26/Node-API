import request from 'supertest'
import {Express} from 'express-serve-static-core'
import {app} from "../server"
let server: Express

describe("GET /products", () => {
    it("Return all products", async () => {
        request(app)
        .get("/products")
    })
})