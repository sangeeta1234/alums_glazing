  const oprojectImages = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
     "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
     "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
  ];

  function orenderProjects() {
    const grid = document.getElementById("projectsOGrid");
    grid.innerHTML = "";
    const start = (currentPage - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    const currentImages = oprojectImages.slice(start, end);
    currentImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      grid.appendChild(img);
    });
  }

  function orenderPagination() {
    const totalPages = Math.ceil(oprojectImages.length / imagesPerPage);
    const pagination = document.getElementById("opagination");
    pagination.innerHTML = "";

    // Previous button
    const prevLi = document.createElement("li");
    prevLi.classList.add("page-item");
    if (currentPage === 1) prevLi.classList.add("disabled");
    prevLi.innerHTML = `<a class="page-link" href="#">&laquo; Prev</a>`;
    prevLi.addEventListener("click", e => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        orenderProjects();
        orenderPagination();
      }
    });
    pagination.appendChild(prevLi);

    // Show page numbers only for first 4 pages
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) addPageButton(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 4; i++) addPageButton(i);
        const li = document.createElement("li");
        li.classList.add("page-item", "disabled");
        li.innerHTML = `<a class="page-link">...</a>`;
        pagination.appendChild(li);
      } else {
        const li = document.createElement("li");
        li.classList.add("page-item", "disabled");
        li.innerHTML = `<a class="page-link">Page ${currentPage}</a>`;
        pagination.appendChild(li);
      }
    }

    // Next button
    const nextLi = document.createElement("li");
    nextLi.classList.add("page-item");
    if (currentPage === totalPages) nextLi.classList.add("disabled");
    nextLi.innerHTML = `<a class="page-link" href="#">Next &raquo;</a>`;
    nextLi.addEventListener("click", e => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        orenderProjects();
        orenderPagination();
      }
    });
    pagination.appendChild(nextLi);

    function addPageButton(i) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      if (i === currentPage) li.classList.add("active");
      li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      li.addEventListener("click", e => {
        e.preventDefault();
        currentPage = i;
        orenderProjects();
        orenderPagination();
      });
      pagination.appendChild(li);
    }
  }

