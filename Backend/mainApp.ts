import { Application, Response, Request, NextFunction } from "express";
import { mainError, HTTP } from "./Error/mainError";

export const mainApp = (app: Application) =>{
try {
    app.use("/api/v1/auth");

    app.get("/", (req: Request, res: Response) =>{
        try {
            return res.status(200).json({
                message: "Default Page"
            })
        } catch (error: any) {
            return res.status(404).json({
                message: "Error",
                date: error.message
            });
        }
    });
    app.all("*", (req: Request, res:Response, next: NextFunction) => {
        next(
            new mainError({
                name: "Route Error",
                message: `This route ${req.originalUrl} does not exist`,
                status: HTTP.BAD,
                success: false,
            })
        )
    })
} catch (error) {
    
}
}