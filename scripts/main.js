// FK Rede Não Mono - Link Bio JavaScript

// Configurações
const CONFIG = {
    whatsappNumber: '5521993910174', // ALTERAR PARA O NÚMERO REAL
    chatMessage: 'Olá! Vim através do link bio e gostaria de saber mais sobre a FK Rede Não Mono.',
    animationDelay: 100
};

// Função para abrir chatbot
function openChatbot() {
    const message = encodeURIComponent(CONFIG.chatMessage);
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
    
    // Analytics (opcional - implementar se necessário)
    trackEvent('chatbot_click', 'engagement', 'whatsapp');
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Função para rastrear eventos (Google Analytics, etc.)
function trackEvent(action, category, label) {
    // Implementar analytics se necessário
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    console.log(`Event tracked: ${action} - ${category} - ${label}`);
}

// Função para animar elementos na entrada
function animateElements() {
    const elements = document.querySelectorAll('.link-item, .pillar');
    
    elements.forEach((element, index) => {
        // Estado inicial
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        // Animar com delay
        setTimeout(() => {
            element.style.transition = 'all 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * CONFIG.animationDelay);
    });
}

// Função para adicionar event listeners
function addEventListeners() {
    // Event listeners para links (analytics)
    const links = document.querySelectorAll('.link-item');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const linkTitle = link.querySelector('.link-title').textContent;
            trackEvent('link_click', 'navigation', linkTitle);
        });
    });

    // Event listener para redes sociais
    const socialLinks = document.querySelectorAll('.social-item');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            trackEvent('social_click', 'engagement', 'instagram');
        });
    });

    // Event listener para o chatbot
    const chatbotButton = document.querySelector('.chatbot-toggle');
    if (chatbotButton) {
        chatbotButton.addEventListener('click', openChatbot);
    }

    // Event listener para teclas (acessibilidade)
    document.addEventListener('keydown', (e) => {
        // Esc para fechar modais (se implementado no futuro)
        if (e.key === 'Escape') {
            closeModals();
        }
        
        // Enter ou Space para ativar chatbot quando focado
        if ((e.key === 'Enter' || e.key === ' ') && document.activeElement === chatbotButton) {
            e.preventDefault();
            openChatbot();
        }
    });
}

// Função para fechar modais (para uso futuro)
function closeModals() {
    const modals = document.querySelectorAll('[data-modal]');
    modals.forEach(modal => {
        modal.remove();
    });
}

// Função para mostrar modal de opções de contato (alternativa ao WhatsApp direto)
function showChatOptions() {
    const modal = document.createElement('div');
    modal.setAttribute('data-modal', 'true');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; display: flex; align-items: center; justify-content: center;" onclick="closeModals()">
            <div style="background: white; padding: 30px; border-radius: 20px; max-width: 300px; text-align: center; animation: fadeInUp 0.3s ease;" onclick="event.stopPropagation()">
                <h3 style="margin-bottom: 20px; color: #333; font-size: 18px;">Como posso ajudar?</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="https://wa.me/${CONFIG.whatsappNumber}" target="_blank" style="padding: 15px; background: #25D366; color: white; text-decoration: none; border-radius: 10px; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease;" onmouseover="this.style.background='#20B358'" onmouseout="this.style.background='#25D366'">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="mailto:contato@redenaomono.org" style="padding: 15px; background: #4a154b; color: white; text-decoration: none; border-radius: 10px; display: flex; align-items: center; gap: 10px; transition: all 0.3s ease;" onmouseover="this.style.background='#6b2c87'" onmouseout="this.style.background='#4a154b'">
                        <i class="fas fa-envelope"></i> Email
                    </a>
                </div>
                <button onclick="closeModals()" style="margin-top: 15px; padding: 10px 20px; background: #f0f0f0; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.background='#e0e0e0'" onmouseout="this.style.background='#f0f0f0'">Fechar</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    trackEvent('modal_open', 'engagement', 'contact_options');
}

// Função para detectar se é dispositivo móvel
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if (isMobile()) {
        // Reduzir animações em dispositivos móveis para melhor performance
        const style = document.createElement('style');
        style.textContent = `
            .logo::before {
                animation-duration: 5s;
            }
            .chatbot-toggle i {
                animation-duration: 3s;
            }
        `;
        document.head.appendChild(style);
    }
}

// Função para lazy loading de imagens (se implementado no futuro)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Função para implementar PWA (Service Worker)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        });
    }
}

// Função para adicionar funcionalidade de compartilhamento
function addShareFunctionality() {
    if (navigator.share) {
        const shareButton = document.createElement('button');
        shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
        shareButton.className = 'share-button';
        shareButton.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: #4a154b;
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(74, 21, 75, 0.3);
            transition: all 0.3s ease;
            z-index: 999;
        `;
        
        shareButton.addEventListener('click', async () => {
            try {
                await navigator.share({
                    title: 'FK Rede Não Mono',
                    text: 'Criando redes autênticas e promovendo reflexões',
                    url: window.location.href
                });
                trackEvent('share_click', 'engagement', 'native_share');
            } catch (err) {
                console.log('Error sharing:', err);
            }
        });
        
        document.body.appendChild(shareButton);
    }
}

// Função para criar favicon dinâmico
function createDynamicFavicon() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 32;
    canvas.height = 32;
    
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, 32, 32);
    gradient.addColorStop(0, '#4a154b');
    gradient.addColorStop(1, '#8b5cf6');
    ctx.fillStyle = gradient;
    
    // Criar fundo arredondado
    ctx.beginPath();
    ctx.roundRect(0, 0, 32, 32, 4);
    ctx.fill();
    
    // Texto FK
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#ffd700';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('FK', 16, 16);
    
    // Aplicar como favicon
    const link = document.querySelector('link[rel="icon"]') || document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = canvas.toDataURL();
    document.head.appendChild(link);
    
    // Aplicar como apple-touch-icon
    const appleLink = document.querySelector('link[rel="apple-touch-icon"]') || document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    appleLink.href = canvas.toDataURL();
    document.head.appendChild(appleLink);
}

// Suporte para roundRect (fallback para navegadores antigos)
function addRoundRectSupport() {
    if (!CanvasRenderingContext2D.prototype.roundRect) {
        CanvasRenderingContext2D.prototype.roundRect = function(x, y, width, height, radius) {
            this.beginPath();
            this.moveTo(x + radius, y);
            this.lineTo(x + width - radius, y);
            this.quadraticCurveTo(x + width, y, x + width, y + radius);
            this.lineTo(x + width, y + height - radius);
            this.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            this.lineTo(x + radius, y + height);
            this.quadraticCurveTo(x, y + height, x, y + height - radius);
            this.lineTo(x, y + radius);
            this.quadraticCurveTo(x, y, x + radius, y);
            this.closePath();
        };
    }
}

// Função principal de inicialização
function init() {
    // Aguardar DOM estar pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        return;
    }
    
    // Executar funções de inicialização
    addRoundRectSupport();
    createDynamicFavicon();
    animateElements();
    addEventListeners();
    optimizeForMobile();
    lazyLoadImages();
    addShareFunctionality();
    
    // Registrar Service Worker para PWA
    registerServiceWorker();
    
    console.log('FK Link Bio initialized successfully!');
}

// Função para modo de desenvolvimento/debug
function debugMode() {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('Debug mode enabled');
        window.FK_DEBUG = {
            config: CONFIG,
            trackEvent,
            showChatOptions,
            isMobile: isMobile()
        };
    }
}

// Inicializar aplicação
init();
debugMode();

// Expor funções globalmente para uso no HTML
window.openChatbot = openChatbot;
window.showChatOptions = showChatOptions;
window.closeModals = closeModals;