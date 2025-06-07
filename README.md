# FK Rede Não Mono - Instagram Link Bio

Site moderno e elegante para centralizar os links importantes da FK Rede Não Mono.

## 🚀 Tecnologias

- HTML5
- CSS3 (com animações e gradientes)
- JavaScript vanilla
- Font Awesome (ícones)
- Design responsivo

## 📱 Características

- Design moderno com glassmorphism
- Pilares da FK em destaque
- Animações suaves
- Totalmente responsivo
- Chatbot integrado via WhatsApp
- SEO otimizado

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Acessar em http://localhost:3000
🌐 Deploy
Este projeto está configurado para deploy automático no Vercel.
URL de Produção

https://instagramfk.redenaomono.org

📞 Contato
Para dúvidas ou sugestões, entre em contato através dos canais da FK Rede Não Mono.

### 5. public/manifest.json
```json
{
  "name": "FK Rede Não Mono",
  "short_name": "FK",
  "description": "Link bio da FK Rede Não Mono",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#4a154b",
  "theme_color": "#8b5cf6",
  "icons": [
    {
      "src": "android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
🚀 Passos para Deploy
1. Configurar no GitHub
bash# Inicializar repositório
git init
git add .
git commit -m "Initial commit: FK Instagram Link Bio"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/fk-instagram-linkbio.git
git push -u origin main
2. Configurar no Vercel

Acesse vercel.com
Conecte sua conta GitHub
Importe o repositório fk-instagram-linkbio
Configure o domínio personalizado: instagramfk.redenaomono.org

3. Configurar DNS
No seu provedor de DNS (onde está configurado redenaomono.org):
Tipo: CNAME
Nome: instagramfk
Valor: cname.vercel-dns.com
📝 Customizações Necessárias
Antes do deploy, lembre-se de:

Atualizar número do WhatsApp em src/scripts/main.js (linha que contém 5584999999999)
Adicionar favicon personalizado em public/
Verificar todos os links estão funcionando
Testar responsividade em diferentes dispositivos

📱 PWA Ready
O projeto já está configurado como PWA (Progressive Web App), permitindo:

Instalação no celular
Funcionamento offline básico
Ícones personalizados

🔧 Manutenção
Para atualizações futuras:

Faça as alterações localmente
Commit e push para o GitHub
O Vercel fará deploy automático
Verifique em instagramfk.redenaomono.org