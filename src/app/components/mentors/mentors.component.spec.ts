<section class="mentors-section">
  <div class="container">
    <h2 class="section-title"><span>MENTORES</span> <small>/// JUECES</small></h2>

    <div class="grid">
      <div class="tech-card" *ngFor="let mentor of mentors">

        <span class="corner top-left"></span>
        <span class="corner top-right"></span>
        <span class="corner bottom-left"></span>
        <span class="corner bottom-right"></span>

        <div class="img-container">
          <img [src]="mentor.image" [alt]="mentor.name">
          <div class="scanner-line"></div>
          <div class="overlay"></div>
        </div>

        <div class="info">
          <h3>{{ mentor.name }}</h3>
          <p class="role">{{ mentor.role }}</p>
          <div class="company-badge">
            <i class="fa-solid fa-building"></i> {{ mentor.company }}
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
