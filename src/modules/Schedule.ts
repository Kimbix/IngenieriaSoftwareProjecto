class Seccion {
  protected _horas: Array<[Date, Date]>;
  Seccion(): void {
    this._horas = new Array<[Date, Date]>();
  }

  constructor(horas: Array<[Date, Date]>) {
    this._horas = horas;
  }

  public get horas(): Array<[Date, Date]> {
    return this._horas;
  }
  set horas(v: Array<[Date, Date]>) {
    this._horas = v;
  }
}
class Materia {
  protected nombre: string;
  protected secciones: Map<string, Seccion>;
  constructor(Secciones: Map<string, Seccion>, Datos: string) {
    this.secciones = Secciones;
    this.nombre = Datos;
  }
}
export class Schedule {
  protected _primitivo: boolean;
  protected materias;
  constructor(primitivo: boolean, materias: Map<string, Materia | string>) {
    this._primitivo = primitivo;
    this.materias = materias;
  }

  public get primitivo(): boolean {
    return this._primitivo;
  }

  public set primitivo(v: boolean) {
    this._primitivo = v;
  }

  /**
   * obtenerHorarios
   */
  public obtenerHorarios(materias: Materia[]): Schedule[] {
    materias.forEach((materia) => {
      console.log(materia);
    });
    return [
      new Schedule(true, new Map<string, Materia | string>()),
      new Schedule(true, new Map<string, Materia | string>()),
    ];
  }
}

function main() {
  const horas = new Array<[Date, Date]>();
  const mateA1: Seccion = new Seccion(horas);
  const inicio = new Date(0);
  const fin = new Date(inicio.getTime() + 1000 * 60 * 60 * 2);
  mateA1.horas.push([inicio, fin]);
  const secciones = new Map<string, Seccion>();
  secciones.set("Matamathics", mateA1);
  const matematicaBasica: Materia = new Materia(secciones, "Matematica Basica");
  const materias = new Map<string, Materia | string>();
  materias.set("Matematica Basica", matematicaBasica);
  const horario = new Schedule(false, materias);
  horario.primitivo = true;
  console.log(horario);
  for (let index = 0; index < 10; index++) {
    console.log("espacio\n");
  }
  console.log(Bun.inspect(horario));

  console.info(Bun.nanoseconds() / 1000000);
}
main();
