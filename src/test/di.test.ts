/**
 * Created by enixjin on 4/4/18.
 */

import * as assert from "assert";
import {Inject} from "../di/Inject";
import {Service} from "../di/Service";

global.dependencyInjectionContainer = new Map();

@Service("justAService")
class OtherService {
    saySomething() {
        return "something~";
    }
}

@Service()
class MyService {
    sayHello() {
        return "hello world";
    }
}

class testClass {

    @Inject()
    service: MyService;

    @Inject("justAService")
    otherService: OtherService;
}

describe("di test", function () {
    before(function () {
        global.dependencyInjectionContainer = new Map();
    });
    it("test service injection", () => {
        let tc = new testClass();
        assert.equal(tc.service.sayHello(), "hello world");
    });
    it("test service injection with name", () => {
        let tc = new testClass();
        assert.equal(tc.otherService.saySomething(), "something~");
    });
});