// Lista de produtos fornecida
const products = [
    { code: "0001", name: "Arroz", type: "Arroz" },
    { code: "0002", name: "Arroz integral", type: "Arroz" },
    { code: "0003", name: "Feijão", type: "Feijão" },
    { code: "0004", name: "Tutu de feijão", type: "Feijão" },
    { code: "0005", name: "Carne de panela", type: "Carne" },
    { code: "0006", name: "Linguiça fina", type: "Carne" },
    { code: "0007", name: "Torresmo", type: "Carne" },
    { code: "0008", name: "Filé de frango à milanesa", type: "Carne" },
    { code: "0009", name: "Bisteca", type: "Carne" },
    { code: "0010", name: "Macarronada", type: "Massa" }
  ];
  
  // Função para exibir produtos na tabela
  function displayProducts(filteredProducts) {
    const tableBody = document.getElementById('productTable').querySelector('tbody');
    tableBody.innerHTML = ''; // Limpar a tabela
  
    filteredProducts.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${product.code}</td>
        <td>${product.name}</td>
        <td>${product.type}</td>
        <td class="actions">
          <button class="edit" onclick="editProduct('${product.code}')">✏️</button>
          <button class="delete" onclick="deleteProduct('${product.code}')">🗑️</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Função de filtro baseada no nome e tipo
  function filterProducts() {
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const filterName = document.getElementById('filterName').value.toLowerCase();
    const filterType = document.getElementById('filterType').value;
  
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchName) &&
      product.name.toLowerCase().includes(filterName) &&
      (filterType === "" || product.type === filterType)
    );
  
    displayProducts(filtered);
  }
  
  // Funções de edição e exclusão
  function editProduct(code) {
    alert(`Editar produto com código: ${code}`);
  }
  
  function deleteProduct(code) {
    const confirmDelete = confirm(`Deseja excluir o produto com código: ${code}?`);
    if (confirmDelete) {
      const index = products.findIndex(product => product.code === code);
      if (index > -1) {
        products.splice(index, 1);
        filterProducts(); // Atualizar tabela
      }
    }
  }
  
  // Função para salvar alterações
  function saveChanges() {
    alert("Alterações salvas com sucesso!");
  }
  
  // Inicializar tabela com todos os produtos
  displayProducts(products);
  