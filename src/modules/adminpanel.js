export function adminPanel() {
  document.body.innerHTML += `<div class="modal fade" id="adminPanelModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Admin Panel stuff</h5>
        </div>
        <div class="modal-body centeris flex-column flex-wrap">
       <!-- start -->
         <form class="w-100 centeris flex-column flex-wrap">
          <input type="text" id="categoryInput" class="form-control my-3 w-75" placeholder="Enter a new category">
          <button id="addCategoryBtn" class="btn btn-primary my-1">Add category</button>
        </div>
      </form>    
          <!-- dropdown -->

          <div id="dropdownBtn" class="dropdown centeris">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Select category to remove
  </button>
  <ul id="catDropdown" class="dropdown-menu">
    
  </ul>
</div>
        <!-- end -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  `;
}
