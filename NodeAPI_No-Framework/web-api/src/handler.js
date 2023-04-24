import { parse } from "node:url";
import { DEFAULT_HEADER } from "./util/util.js";
import { routes } from "./routes/heroRoutes.js";

const heroRoutes = routes({
    heroService: {}
})

const allRoutes = {

    ...heroRoutes,

    // 404 routes
    default: (request, response) => {
        response.writeHead(404, DEFAULT_HEADER)
        response.write('Not Found!')
        response.end()
    }
}

// 1 request handler
function handler(req, res) {
    const {
        url,
        method
    } = req;

    const {
        pathname
    } = parse(url);

    const key = `${pathname}:${method.toLowerCase()}`
    const chosen = allRoutes[key] || allRoutes.default              // 2 decides which controller to call
    
    return new Promise((resolve, reject) => resolve(chosen(req, res))).catch(handlerError(res))       // 3 async handler returns promise, then runs the controller through the promise executor

}

// 4 error handler to handle any async error from controllers
function handlerError(response) {
    return error => {
        console.log('Something bad has  happened**', error.stack)
        response.writeHead(500, DEFAULT_HEADER)
        response.write(JSON.stringify({
            error: 'internet server error!!'
        }))

        return response.end()
    }
}

export default handler;