import { produtos } from "../mock"

export default function handler(req, res) {
    res.status(200).json(produtos)
}
