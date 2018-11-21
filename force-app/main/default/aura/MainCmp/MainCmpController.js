({
    handleBtnClick : function(cmp, event, helper) {
        cmp.set('v.myModalInstance', cmp.find('overlayLib').showCustomModal({
            header : cmp.get('v.myModalHeader'),
            body : cmp.get('v.myModalBody'),
            footer : cmp.get('v.myModalFooter'),
            showCloseButton: true
        }));
    },
    
    handleModalCloseClick : function(cmp, event, helper) {
        cmp.get('v.myModalInstance').then(function(modal){
            modal.close();
        });
        cmp.set('v.myModalInstance', null);
    },
    
    handleModalSaveClick : function(cmp, event, helper) {
        alert('Save clicked');
        cmp.get('v.myModalInstance').then(function(modal){
            modal.close();
        });
        cmp.set('v.myModalInstance', null);
    },
    
});