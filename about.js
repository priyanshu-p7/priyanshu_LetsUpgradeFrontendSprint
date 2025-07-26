// Contact Form Handling
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    
    // Loading State
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });

        if(response.ok) {
            form.reset();
            showAlert(' Message sent successfully!', 'success');
        } else {
            throw new Error('Server error');
        }
    } catch (error) {
        showAlert(' Failed to send message', 'error');
        console.error('Error:', error);
    } finally {
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
    }
});

// alert window
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `form-alert ${type}`;
    alertDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.classList.add('visible'), 10);
    
    setTimeout(() => {
      alertDiv.classList.remove('visible');
      setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
  }