

    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.toggle('open');
    }

    async function handleSubmit(e) {
      e.preventDefault();
      const form = document.getElementById('contact-form');
      const btn  = document.getElementById('form-btn');
      const msg  = document.getElementById('form-msg');

      // Gjendje duke dërguar
      btn.disabled = true;
      btn.textContent = 'Duke dërguar...';
      btn.style.opacity = '0.7';

      try {
        const response = await fetch('https://formspree.io/f/mbdbload', {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          // Sukses
          msg.style.display = 'block';
          msg.style.color = '#9FE1CB';
          msg.textContent = '✓ Mesazhi u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.';
          form.reset();
          setTimeout(() => { msg.style.display = 'none'; }, 6000);
        } else {
          const data = await response.json();
          throw new Error(data.errors ? data.errors.map(e => e.message).join(', ') : 'Gabim gjatë dërgimit.');
        }
      } catch (err) {
        msg.style.display = 'block';
        msg.style.color = '#ff8a80';
        msg.textContent = '✕ Gabim: ' + (err.message || 'Ju lutemi provoni përsëri.');
        setTimeout(() => { msg.style.display = 'none'; }, 6000);
      } finally {
        btn.disabled = false;
        btn.textContent = 'Dërgo Mesazhin';
        btn.style.opacity = '1';
      }
    }

    function openOrariModal() {
      document.getElementById('orari-modal-overlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeOrariModalBtn() {
      document.getElementById('orari-modal-overlay').classList.remove('open');
      document.body.style.overflow = '';
    }
    function closeOrariModal(e) {
      if (e.target === document.getElementById('orari-modal-overlay')) closeOrariModalBtn();
    }

    // Lidhja e butonave navbar me modal
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a[href="#orari"]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          openOrariModal();
        });
      });

      // Navbar scroll shadow
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      });

      // Animacionet scroll
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.lajm-card, .drejtim-card, .mesues-card, .gal-item, .value-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeOrariModalBtn();
    });

  