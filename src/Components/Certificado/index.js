import {
  Box,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  Slide,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/unemat.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as htmlToImage from "html-to-image";
import Logo4 from "../../assets/imageicons.png";
import { BiError, BiShareAlt } from "react-icons/bi";
import { MdCloudDownload } from "react-icons/md";
import React, { useRef, useState } from "react";
import "@fontsource/roboto";
import "@fontsource/anton";
import "@fontsource/tinos";
import "@fontsource/mr-dafoe";

const styleGrid = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Certificado(props) {
  const domEl = useRef(null);
  const [loading, setLoading] = useState(false);

  const downloadImage = async () => {
    try {
      setLoading(true);
      const dataURL = await htmlToImage.toPng(domEl.current);
      const link = document.createElement("a");
      link.style = "display:none;";
      link.download = "Certificado";
      link.href = dataURL;
      link.click();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Dialog
        open={matches}
        TransitionComponent={Transition}
        keepMounted
        onClose={matches}
      >
        <DialogTitle sx={{ textAlign: "center" }}>ATENCÃO</DialogTitle>
        <DialogContent>
          <DialogContentText
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BiError size={120} color="red" />
            Essa ferramenta funciona melhor em dispositivos desktop pois permite
            melhor visualização do certificado para seu download. Considere
            acesar a ferramenta em outro dipositivo!
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <Grid
        id="domEl"
        ref={domEl}
        sx={{
          padding: "20px 0",
          position: "relative",
          borderRadius: "4px",
          background:
            "linear-gradient(0deg, rgba(10,148,8,1) 16%, rgba(194,194,194,1) 64%, rgba(37,55,240,1) 94%)",
        }}
        container
      >
        <Grid md={2} lg={2} xl={2} sx={styleGrid} item>
          <Stack justifyContent="center" alignItems="center">
            <Box component="img" src={Logo1} sx={{ width: 80 }} />
          </Stack>
        </Grid>
        <Grid md={8} lg={8} xl={8} sx={styleGrid} item>
          <p className="text-4xl font-anton">
            Universidade do Estado de Mato Grosso
          </p>
        </Grid>
        <Grid sx={styleGrid} md={2} lg={2} xl={2} item>
          <Box component="img" src={Logo2} sx={{ width: 80 }} />
        </Grid>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: 91,
            left: 45,
            fontFamily: "Mr Dafoe",
            color: "#0833cd",
            textShadow: "2px 2px #FFFFFF",
          }}
        >
          Certificado
        </Typography>
        <Grid md={0.5} lg={0.5} xl={0.5} item />
        <Box
          component="img"
          src={Logo4}
          sx={{
            position: "absolute",
            width: 300,
            zIndex: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
          }}
        />
        <Grid mt={8} md={11} lg={11} xl={11} item>
          <Stack
            sx={{
              borderRadius: "1px 140px",
              bgcolor: "rgba(255,255,255, 0.8)",
              color: "#000000",
              zIndex: 2,
              padding: 5,
            }}
          >
            <Typography fontFamily="Tinos" variant="h5" textAlign="justify">
              {props.textDescricao ? (
                props.textDescricao
              ) : (
                <>
                  [ Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. ]
                </>
              )}
            </Typography>
            <Grid mt={2} container>
              <Grid md={6} lg={6} xl={6}>
                {props.banca ? (
                  <>
                    <p className="text-md font-Tinos font-bold">
                      Banca Avaliadora
                    </p>
                    {props.name5 ? (
                      <Stack marginLeft={1} direction="row">
                        <p className="text-sm font-Tinos font-bold">
                          Presidente:
                        </p>
                        <p className="ml-2 text-sm font-Tinos">{props.name5}</p>
                      </Stack>
                    ) : null}

                    {props.name6 ? (
                      <Stack marginLeft={1} direction="row">
                        <p className="text-sm font-Tinos font-bold">
                          Orientadora(o):
                        </p>
                        <p className="ml-2 text-sm font-Tinos">{props.name6}</p>
                      </Stack>
                    ) : null}
                    {props.name7 ? (
                      <Stack marginLeft={2} direction="row">
                        <p className="text-sm font-Tinos font-bold">
                          Avaliador I:
                        </p>
                        <p className="ml-2 text-sm font-Tinos">{props.name7}</p>
                      </Stack>
                    ) : null}

                    {props.name8 ? (
                      <Stack marginLeft={2} direction="row">
                        <p className="text-sm font-Tinos font-bold">
                          Avaliador II:
                        </p>
                        <p className="ml-2 text-sm font-Tinos">{props.name8}</p>
                      </Stack>
                    ) : null}
                    {props.name9 ? (
                      <Stack marginLeft={2} direction="row">
                        <p className="text-sm font-Tinos font-bold">
                          Avaliador III:
                        </p>
                        <p className="ml-2 text-sm font-Tinos">{props.name9}</p>
                      </Stack>
                    ) : null}
                  </>
                ) : null}
              </Grid>
              <Grid md={6} lg={6} xl={6}>
                <p className="text-end text-xl font-Tinos">
                  {props.textCampus ? props.textCampus : <>[ CAMPUS ]</>}
                  -MT, 12 de Dezembro de 2022.
                </p>
              </Grid>
            </Grid>
            <Grid mt={4} container>
              {props.qtdAssinatura > 1 ? (
                <Grid sx={styleGrid} md={6} lg={6} xl={6} item>
                  <div className="pl-10 pr-10 pt-10 flex flex-col align-center justify-center font-Tinos text-black-500">
                    <div className="mb-2">
                      <Divider sx={{ bgcolor: "#000000" }} />
                    </div>
                    <p className="text-center font-bold">{props.name3}</p>
                    <p className="text-center">{props.name4}</p>
                    <p className="text-center">
                      {props.textCampus ? (
                        `Campus Universitário de ${props.textCampus}`
                      ) : (
                        <>[ SELECIONE O CAMPUS ]</>
                      )}
                    </p>
                  </div>
                </Grid>
              ) : (
                <Grid sx={styleGrid} md={6} lg={6} xl={6} item />
              )}
              {props.qtdAssinatura >= 1 ? (
                <Grid sx={styleGrid} md={6} lg={6} xl={6} item>
                  <div className="pl-10 pr-10 pt-10 flex flex-col align-center justify-center font-Tinos text-black-500">
                    <div className="mb-2">
                      <Divider sx={{ bgcolor: "#000000" }} />
                    </div>
                    <p className="text-center font-bold">{props.name1}</p>
                    <p className="text-center">{props.name2}</p>
                    <p className="text-center">
                      {props.textCampus ? (
                        `Campus Universitário de ${props.textCampus}`
                      ) : (
                        <>[ SELECIONE O CAMPUS ]</>
                      )}
                    </p>
                  </div>
                </Grid>
              ) : (
                <Grid sx={styleGrid} md={6} lg={6} xl={6} item>
                  <div className="pl-10 pr-10 pt-10 flex flex-col align-center justify-center font-Tinos text-black-500">
                    <div className="mb-2">
                      <Divider sx={{ bgcolor: "#000000" }} />
                    </div>
                    <p className="text-center font-bold">
                      [ NOME COMPLETO DO RESPONSAVEL]
                    </p>
                    <p className="text-center">[ ATRIBUIÇÃO OU FUNÇÃO ]</p>
                    <p className="text-center">
                      {props.textCampus ? (
                        props.textCampus
                      ) : (
                        <>[ SELECIONE O CAMPUS ]</>
                      )}
                    </p>
                  </div>
                </Grid>
              )}
            </Grid>
          </Stack>
        </Grid>
        <Grid md={0.5} lg={0.5} xl={0.5} item />
        <Grid md={0.5} lg={0.5} xl={0.5} item />
        {props.textCurso ? (
          <>
            <Grid mt={3} md={8} lg={8} xl={8} item>
              <Stack
                className="w-fit"
                sx={{
                  ml: 3,
                  borderRadius: "2px 30px",
                  bgcolor: "rgba(255,255,255, 0.8)",
                  color: "#000000",
                  padding: 2,
                }}
              >
                <p className="font-bold font-Tinos w-fit">{props.textCurso}</p>
                <p className="font-Tinos w-fit">
                  Av. São João, n. 563, Cavalhada, CEP 78200-000, Cáceres, MT
                  Tel: (65) 3221 0504
                </p>
                <div className="flex font-Tinos w-fit ">
                  <p className="text-cyan-600 italic font-Tinos mr-1">
                    www.unemat.br
                  </p>
                  <p>– E-mail: enfermagem-cac@unemat.br</p>
                </div>
              </Stack>
            </Grid>
          </>
        ) : (
          <>
            <Grid mt={3} md={8} lg={8} xl={8} item>
              <Stack
                className="w-fit"
                sx={{
                  ml: 3,
                  borderRadius: "2px 30px",
                  bgcolor: "rgba(255,255,255, 0.8)",
                  color: "#000000",
                  padding: 2,
                }}
              >
                <p className="font-bold font-Tinos w-fit">
                  [ SELECIONE O CURSO ]
                </p>
                <p className="font-Tinos w-fit">
                  [ ENDERECO E CONTATO DO CURSO ]
                </p>
                <div className="flex font-Tinos w-fit ">
                  <p className="text-cyan-600 italic font-Tinos mr-1">
                    [ SITE DA UNIVERSIDADE ]
                  </p>
                  <p>– [ EMAIL DO CURSO ]</p>
                </div>
              </Stack>
            </Grid>
          </>
        )}
        <Grid
          mt={3}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            zIndex: 1,
          }}
          item
        >
          <Stack
            sx={{
              borderRadius: "2px 30px",
              bgcolor: "rgba(255,255,255, 0.8)",
              color: "#000000",
              padding: 2,
            }}
          >
            <Box component="img" src={Logo3} sx={{ width: 190 }} />
          </Stack>
        </Grid>
        <Grid md={0.5} lg={0.5} xl={0.5} item />
      </Grid>
      {/* </Container> */}

      <div className="flex mt-4 justify-end">
        <Tooltip arrow title="compartilhar certificado nas redes sociais">
          <button className="transition ease-in-out rounded-md flex border-solid border-2  text-purple-500 border-purple-500 hover:border-purple-700 active:border-purple-400 flex-g p-2 items-center mr-2">
            <BiShareAlt className="mr-2" />
            <p className="">Share</p>
          </button>
        </Tooltip>
        <Tooltip arrow title="fazer download do certificado">
          <button
            onClick={downloadImage}
            className="w-[115px] transition rounded-md flex border-solid active:border-pink-400 border-2 text-pink-500 border-pink-500 hover:border-pink-700 flex-g p-2 items-center "
          >
            {loading ? (
              <>
                <CircularProgress size={20} className="mr-2" />
              </>
            ) : (
              <>
                <MdCloudDownload className="mr-2" />
              </>
            )}
            <p className="">Download</p>
          </button>
        </Tooltip>
      </div>
    </>
  );
}
