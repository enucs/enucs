import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.render('partners', {
        title: 'Partners'
    });
});

export default { router };
