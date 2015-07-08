tasksController = function() {
	var taskPage;
	var initialised = false;   
	return {
		init : function(page) {
			if (!initialised) {
				taskPage = page;
				$(taskPage).find( '[required="required"]' ).prev('label').append( '<span>*</span>').children( 'span').addClass('required');
				$(taskPage).find('tbody tr:even').addClass( 'even');
				
				$(taskPage).find( '#btnAddTask' ).click( function(evt) {
					evt.preventDefault();
					$(taskPage ).find('#taskCreation' ).removeClass( 'not');
				});
				$(taskPage).find('#tblTasks tbody' ).on('click', 'tr',function(evt) {
					$(evt.target ).closest('td').siblings( ).andSelf( ).toggleClass( 'rowHighlight');
				});
				$(taskPage ).find('#tblTasks tbody').on('click', '.deleteRow', function(evt) {
					evt.preventDefault();
					$(evt.target ).parents('tr').remove();
				});
				$(taskPage).find( '#saveTask' ).click(function(evt) {
					evt.preventDefault();
					var task = $('form').toObject();
					if ($(taskPage).find('form').valid())
					    $('#taskRow').tmpl( task).appendTo($(taskPage ).find( '#tblTasks tbody'));
				});
				initialised = true;
			}
    	}
	}
}();