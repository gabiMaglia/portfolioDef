import express from "express"

const getUserHandler = (_req: express.Request, res: express.Response) => {
    res.status(200).send('llegoo')
}


export { getUserHandler }