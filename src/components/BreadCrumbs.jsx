import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const BreadCrumbs = () => {
    const { pathname } = useLocation();

    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];

    const titleSegment =
        !isNaN(lastSegment) && segments.length > 1
            ? segments[segments.length - 2]
            : lastSegment || "Home";

    const pageTitle = titleSegment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

    const breadcrumbSegments = segments.filter(
        (segment) => isNaN(segment)
    );

    return (
        <div className="ltn__breadcrumb-area ltn__breadcrumb-area-4 ltn__breadcrumb-color-white---">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="ltn__breadcrumb-inner text-center">
                            <h1 className="ltn__page-title">{pageTitle}</h1>

                            <div className="ltn__breadcrumb-list mx-auto">
                                <Breadcrumb className="justify-content-center">
                                    <Breadcrumb.Item
                                        linkAs={Link}
                                        linkProps={{ to: "/" }}
                                    >
                                        Home
                                    </Breadcrumb.Item>

                                    {breadcrumbSegments.map((segment, index) => {
                                        const path =
                                            "/" +
                                            breadcrumbSegments
                                                .slice(0, index + 1)
                                                .join("/");

                                        const label = segment
                                            .replace(/-/g, " ")
                                            .replace(/\b\w/g, (c) =>
                                                c.toUpperCase()
                                            );

                                        const isLast =index === breadcrumbSegments.length - 1;

                                        return (
                                            <Breadcrumb.Item
                                                key={path}
                                                active={isLast}
                                                linkAs={!isLast ? Link : undefined}
                                                linkProps={
                                                    !isLast
                                                        ? { to: path }
                                                        : undefined
                                                }
                                            >
                                                {label}
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
    );
};

export default BreadCrumbs;