function SideBar (){
    return (
        
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/images/logo-favicon.ico" alt="Muller Gallery"/>
				</div>
			</a>
            <hr className="sidebar-divider my-0"/>
            <li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Muller Gallery</span></a>
			</li>
            <hr className="sidebar-divider"/>
			<div className="sidebar-heading">Opciones</div>
			<li className="nav-item">
				<a className="nav-link collapsed" href="/products">
					<i className="fas fa-fw fa-folder"></i>
					<span>Productos</span>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/usuarios">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Usuarios</span></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/last-product">
					<i className="fas fa-fw fa-table"></i>
					<span>Ultimo Producto</span></a>
			</li>
			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
}

export default SideBar;