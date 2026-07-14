class Controller {
    constructor(service){
        this.service = service;
    }

    getAll = async (req, res) => {
        try {
            const data = await this.service.getAll();
            res.status(200).json({ message: "Success", data });
        } catch (e) {
            res.status(500).json({ error: error.message });
        }
    };
}

export default Controller;