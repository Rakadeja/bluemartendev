<script>
    
    /**
	 * @type {any}
	 */
     export let title;
    
    /**
	 * @type {any}
	 */
     export let description;
    
    /**
	 * @type {any}
	 */
     export let imageURL;
    
    /**
	 * @type {any}
	 */
     export let id;
</script>

<div class="project-card">
    <a href="projects/{id}">
        <img src="{imageURL}" alt={title} />
    </a>
    <!-- src="https://placehold.co/128x128/000000/FFF/?text={title}"  -->
    <h2 class="card-title">{title}</h2>
    <p class="card-text">{description}</p>
    <div class="card-buttons">
        <a href="projects/{id}" class="btn">View Project</a>
    </div>
</div>