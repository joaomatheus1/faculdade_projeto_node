import { IrFonteModel } from "../models/IrFonte";
import { IrNaFonteService } from "../services/IrNaFonteService";

class IrNaFonteController {
  async calcularIrFonte(req, res) {
    const { salBruto, pensaoAlimenticia, dependentes } = req.body;

    try {

      let IrFonte = new IrFonteModel();
      IrFonte.salBruto = salBruto;
      IrFonte.pensaoAlimenticia = pensaoAlimenticia;
      IrFonte.dependentes = dependentes;


      const irnafonteService = new IrNaFonteService();
      IrFonte.resultadoIrFonte = await irnafonteService.calcularIrNaFonte(IrFonte);

      return res.send({ IrFonte });
    } catch (e) {
      res.status(400).json({ error: "Algum dado inserido está inválido" });
    }
  }
}

export { IrNaFonteController };
