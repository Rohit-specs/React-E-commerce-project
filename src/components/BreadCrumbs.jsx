import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, Nav } from "react-bootstrap";
import { ChevronRight } from "react-bootstrap-icons";

const BreadCrumbs = () => {
    const { pathname } = useLocation();

    const segments = pathname.split("/").filter(Boolean);

    const pageTitle = segments[segments.length - 1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="ltn__breadcrumb-inner text-center">
                            <h1 className="ltn__page-title"> {pageTitle}</h1>
                            <div className="ltn__breadcrumb-list mx-auto">
                                <Breadcrumb className="text-center">
                                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                                        Home
                                    </Breadcrumb.Item>

                                    {segments.map((segment, index) => {
                                        const path =
                                            "/" + segments.slice(0, index + 1).join("/");

                                        const label = segment
                                            .replace(/-/g, " ")
                                            .replace(/\b\w/g, (c) => c.toUpperCase());

                                        const isLast = index === segments.length - 1;

                                        return (

                                            <Breadcrumb.Item key={path} active={isLast ? true : false}>
                                                {isLast ? label : <Link to={path}>{label}</Link>}
                                            </Breadcrumb.Item>
                                        );
                                    })}
                                </Breadcrumb>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BreadCrumbs