# Al Khubz

Bem-vindo ao projeto **Al Khubz**, um site de apresentação para o restaurante 
fictício chamado Al Khubz, com foco em gastronomia exótica e mediterrânea. Este projeto utiliza tecnologias modernas para criar uma experiência responsiva e interativa para os usuários.

## Tecnologias Utilizadas
- **HTML5** e **CSS3**
- **Bootstrap** 5 para estilização e componentes responsivos
- **Google Fonts** (Pacifico e Roboto)
- **Bootstrap Icons** para ícones
- **JavaScript** para funcionalidades interativas
- **jQuery** e plugins como `jquery.mask` e `jquery.validate` para manipulação e validação de formulários

## Funcionalidades
1. **Navegação Responsiva:** Menu de navegação adaptável para diferentes dispositivos.
2. **Seções Informativas:** 
   - Sobre o Restaurante
   - Eventos
   - Nosso Cardápio
   - Contato
3. **Destaque do Cardápio:** Tabulação que organiza o cardápio em categorias (Shawarmas, Esfihas, etc.).
4. **Descrição Detalhada:** Apresentação detalhada de pratos, incluindo imagens e descrições atraentes.

## Estrutura do Projeto
- **Cabeçalho:** Contém a barra de navegação com links para as seções principais.
- **Menu Lateral:** Navegação específica para o cardápio.
- **Conteúdo Principal:** Apresentação dinâmica dos itens do cardápio.
- **Scripts:** Interatividade e funcionalidades como máscaras e validações para formulários.

## Como Rodar o Projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/al-khubz.git
   ```
2. Abra o arquivo `index.html` diretamente no navegador.
3. Certifique-se de que os arquivos `bootstrap.min.css`, `bootstrap.bundle.min.js` e outros scripts estão corretamente vinculados no projeto.
4. Para funcionalidades dependentes do servidor (como validação dinâmica), hospede o projeto em um servidor local, como XAMPP ou Live Server.

## Detalhes do Código
### Dependências
- **Bootstrap CSS:**
  ```html
  <link rel="stylesheet" href="./bootstrap.min.css">
  ```
- **Google Fonts:**
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,100;1,900&display=swap" rel="stylesheet">
  ```
- **Bootstrap Icons:**
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
  ```
- **Scripts JS:**
  ```html
  <script src="./jquery.validate.min.js"></script>
  <script src="./main.js"></script>
  ```

### Estrutura da Página
- **Cabeçalho Navegacional:**
  Contém links com ícones e classes do Bootstrap para navegação fluida.

- **Cardápio Dinâmico:**
  Utiliza `data-bs-toggle` para criar uma experiência de tabulação interativa.

- **Itens do Cardápio:**
  Cada prato é exibido com imagem, título e descrição detalhada.

## Licença
Este projeto é para uso educacional e demonstrativo.

## Link para o Projeto

O projeto está publicado e pode ser acessado no seguinte endereço:

[Al Khubz - Restaurante ](https://projeto-al-khubz.vercel.app/)
