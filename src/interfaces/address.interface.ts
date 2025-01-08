interface IAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
}

interface IViacepAddress {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export { IAddress, IViacepAddress };
