module.exports = {
  '/contracts': {
    get: {
      summary: 'Get all contracts',
      tags: ['Contracts'],
      responses: { 200: { description: 'List of contracts' } },
    },
    post: {
      summary: 'Create a new contract',
      tags: ['Contracts'],
      requestBody: { required: true },
      responses: { 201: { description: 'Contract created' } },
    },
  },
  '/contracts/{id}': {
    get: {
      summary: 'Get contract by ID',
      tags: ['Contracts'],
      parameters: [{ name: 'id', in: 'path', required: true }],
      responses: { 200: { description: 'Contract found' } },
    },
    put: {
      summary: 'Update contract',
      tags: ['Contracts'],
      parameters: [{ name: 'id', in: 'path', required: true }],
      requestBody: { required: true },
      responses: { 200: { description: 'Contract updated' } },
    },
    delete: {
      summary: 'Delete contract',
      tags: ['Contracts'],
      parameters: [{ name: 'id', in: 'path', required: true }],
      responses: { 200: { description: 'Contract deleted' } },
    },
  },
};
