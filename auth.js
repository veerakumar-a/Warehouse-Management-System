window.WMS=window.WMS||{};
WMS.currentUser=()=>WMS.Store.get('session',null);
WMS.requireAuth=()=>{if(!WMS.currentUser()){location.href='login.html';return false}return true};
WMS.canEdit=()=>['Admin','Supervisor'].includes(WMS.currentUser()?.role);
WMS.login=(name,role)=>{WMS.Store.set('session',{name,role,at:Date.now()});location.href='dashboard.html'};
WMS.logout=()=>{WMS.Store.remove('session');location.href='login.html'};
