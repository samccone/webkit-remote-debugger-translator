The webkit remote debugger protocol is relatively close in format to chrome's remote debugging protocol, however they do not exactly line up.

Sniffing the messages and working on the transforms is a somewhat painful process. This "translation" project aims to make it easy for anyone to help write the transformations so that we can use chrome's inspector to profile and debug websites running in safari on iOS devices.

The goal of this project is to write adapters to make the tests pass, which inturn can be applied as a proxy layer to https://github.com/google/ios-webkit-debug-proxy.

---

Running

* `npm test`
