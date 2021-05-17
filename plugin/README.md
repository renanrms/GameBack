# Gameback Plugin

Este é um plugin para integrar ao cliente do jogo, caso seja feito em JavaScript, para facilitar as operaçõs como:

* cadastrar e autenticar players
* gerar eventos para o backend do jogo
* obter o state atual do player

## Utilização do Plugin

Para integrar o plugin ao jogo, adicione esta pasta ao código fonte do cliente do jogo e importe o arquivo principal, pode ser com esta linha:

```javascript
import { register, Player } from "CAMINHO_DESTA_PASTA/gameback";
```

Depois é só usar os nomes importados.
