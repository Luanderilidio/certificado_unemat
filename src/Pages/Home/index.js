import { BiMapPin } from "react-icons/bi";
import { MdOutlineBook, MdTextFields } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import Header from "../../Components/header";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slide,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { Stack } from "@mui/system";
import Certificado from "../../Components/Certificado";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const styledInput = {
  "& label.Mui-focused": {
    color: "rgb(59 130 246)",
    fontWeight: 1000,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "rgb(59 130 246)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(59 130 246)",
    },
  },
};

export default function Home() {
  const [name1, setName1] = useState("ex: Prof Luander Ilidio de Arruda");
  const [name2, setName2] = useState("ex: Coordenadora do Curso de Enfermagem");
  const [name3, setName3] = useState("ex: Prof Luander Ilidio de Arruda");
  const [name4, setName4] = useState("ex: Coordenadora do Curso de Enfermagem");
  const [name5, setName5] = useState("");
  const [name6, setName6] = useState("");
  const [name7, setName7] = useState("");
  const [name8, setName8] = useState("");
  const [name9, setName9] = useState("");

  const [descricao, setDescricao] = useState("");
  const [openDescricao, setOpenDescricao] = useState(false);
  const [viewBanca, setViewBanca] = useState(false);
  const [openBanca, setOpenBanca] = useState(false);
  const [openCampus, setOpenCampus] = useState(false);
  const [openCurso, setOpenCurso] = useState(false);
  const [qtdAssinatura, setQtdAssinatura] = useState(0);
  const [openAssinatura, setOpenAssinatura] = useState(false);
  // const [endereco, setEndereco] = useState({});

  const [campus, setCampus] = useState("");
  const [curso, setCurso] = useState("");

  const handleSelectCampus = (event) => {
    setCampus(event.target.value);
  };

  const handleSelectCurso = (event) => {
    setCurso(event.target.value);
  };

  const handleAssinaturaClick = () => {
    setOpenAssinatura(!openAssinatura);
  };

  const handleBancaClick = () => {
    setOpenBanca(!openBanca);
  };

  const handleCursoClick = () => {
    setOpenCurso(!openCurso);
  };

  const handleDescricaoClick = () => {
    setOpenDescricao(!openDescricao);
  };

  const handleCampusClick = () => {
    setOpenCampus(!openCampus);
  };

  const handleChange = (event) => {
    setQtdAssinatura(event.target.value);
    console.log(event.target.value);
    setOpenAssinatura(true);
  };

  // const handleEndereco = async (event) => {
  //   const cep = event.target.value;
  //   console.log(cep.length);
  //   setEndereco(cep);
  //   if (cep && cep.length === 8) {
  //     try {
  //       const response = await axios.get(
  //         `https://viacep.com.br/ws/${cep}/json/`
  //       );
  //       console.log(response.data);
  //       setEndereco((enderecoAntigo) => {
  //         return {
  //           ...enderecoAntigo,
  //           rua: response.data.logradouro,
  //           bairro: response.data.bairro,
  //           cidade: response.data.localidade,
  //           estado: response.data.uf,
  //         };
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     console.log(endereco);
  //   }
  // };

  return (
    <>
      <Header />
      <div className=" flex flex-col items-center justify-center w-full text-white">
        <h1 className="text-7xl font-anton">UNEMTECH</h1>

        <h1 className="font-bold text-xl font-atala">
          Create and share certificates dynamically using this tool
        </h1>
        <Container
          maxWidth="lg"
          className="mt-5 p-3 rounded-lg border-solid border-green-700 border-4"
        >
          {/* <div className="mt-5 w-11/12 h-fit p-3 rounded-lg border-solid border-green-700 border-4 "> */}
          <div className="flex flew-row justify-between items-center font-medium">
            <div className="flex items-center">
              <Tooltip arrow title="Quantas assinaturas o certificado precisa">
                <FormControl>
                  <RadioGroup
                    value={qtdAssinatura}
                    sx={{ alignItems: "center" }}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value={1}
                      control={<Radio size="small" sx={{ color: "white" }} />}
                      label="1"
                    />
                    <FormControlLabel
                      value={2}
                      control={<Radio size="small" sx={{ color: "white" }} />}
                      label="2"
                    />
                  </RadioGroup>
                  <FormHelperText>
                    <p className="font-medium text-white">Assinaturas</p>
                  </FormHelperText>
                </FormControl>
              </Tooltip>

              <Tooltip arrow title="Colocar descricão no certificado">
                <button
                  onClick={handleDescricaoClick}
                  className="transition ease-in-out rounded-md flex border-solid border-2  text-white border-white hover:border-gray-400 active:border-gray-500 flex-g p-2 items-center mr-2"
                >
                  <MdTextFields className="mr-2" />
                  <p className="">Descrição</p>
                </button>
              </Tooltip>
              <Tooltip arrow title="Selecione o Campus">
                <button
                  onClick={handleCampusClick}
                  className="transition ease-in-out rounded-md flex border-solid border-2  text-white border-white hover:border-gray-400 active:border-gray-500 flex-g p-2 items-center mr-2"
                >
                  <BiMapPin className="mr-2" />
                  <p className="">Campus</p>
                </button>
              </Tooltip>
              <Tooltip arrow title="Selecione o curso do certificado">
                <button
                  onClick={handleCursoClick}
                  className="transition ease-in-out rounded-md flex border-solid border-2  text-white border-white hover:border-gray-400 active:border-gray-500 flex-g p-2 items-center mr-2"
                >
                  <MdOutlineBook className="mr-2" />
                  <p className="">Curso</p>
                </button>
              </Tooltip>
              <Tooltip arrow title="Descreva a banca avaliadora">
                <button
                  onClick={() => {
                    handleBancaClick();
                    setViewBanca(true);
                  }}
                  className="transition ease-in-out rounded-md flex border-solid border-2  text-white border-white hover:border-gray-400 active:border-gray-500 flex-g p-2 items-center mr-2"
                >
                  <HiOutlineUserGroup className="mr-2" />
                  <p className="">Banca Avaliadora</p>
                </button>
              </Tooltip>
            </div>
            {/* <div className="flex">
              <Tooltip arrow title="compartilhar certificado nas redes sociais">
                <button className="transition ease-in-out rounded-md flex border-solid border-2  text-purple-500 border-purple-500 hover:border-purple-700 active:border-purple-400 flex-g p-2 items-center mr-2">
                  <BiShareAlt className="mr-2" />
                  <p className="">Share</p>
                </button>
              </Tooltip>
              <Tooltip arrow title="fazer download do certificado">
                <button className="transition rounded-md flex border-solid active:border-pink-400 border-2 text-pink-500 border-pink-500 hover:border-pink-700 flex-g p-2 items-center ">
                  <MdCloudDownload className="mr-2" />
                  <p className="">Download</p>
                </button>
              </Tooltip>
            </div> */}
          </div>
          <div className="p-2">
            <Certificado
              textDescricao={descricao}
              textCurso={curso}
              textCampus={campus}
              qtdAssinatura={qtdAssinatura}
              banca={viewBanca}
              name1={name1}
              name2={name2}
              name3={name3}
              name4={name4}
              name5={name5}
              name6={name6}
              name7={name7}
              name8={name8}
              name9={name9}
            />
          </div>
        </Container>
        <div className="w-80 mt-10 flex flew-row justify-evenly font-medium mb-10 ">
          <button>
            <p className="transition ease-in-out hover:-translate-y-0.1 hover:text-yellow-500">
              about
            </p>
          </button>
          <button>
            <p className="transition ease-in-out hover:-translate-y-0.1 hover:text-yellow-500">
              source
            </p>
          </button>
          <button>
            <p className="transition ease-in-out hover:-translate-y-0.1 hover:text-yellow-500">
              terms
            </p>
          </button>
          <button>
            <p className="transition ease-in-out hover:-translate-y-0.1 hover:text-yellow-500">
              privacy
            </p>
          </button>
          <button>
            <p className="transition ease-in-out hover:-translate-y-0.1 hover:text-yellow-500">
              offsets
            </p>
          </button>
        </div>
      </div>
      <Dialog
        open={openAssinatura}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleAssinaturaClick}
        maxWidth="xl"
      >
        <DialogTitle>Assinatura</DialogTitle>
        <div className="flex">
          <DialogContent>
            <DialogContentText>
              <div className="p-10 flex flex-col align-center justify-center text-gray-500">
                <div className="mb-2">
                  <Divider sx={{ bgcolor: "#000000" }} />
                </div>
                <p className="text-center font-medium">{name1}</p>
                <p className="text-center">{name2}</p>
              </div>
            </DialogContentText>
            <Stack spacing={2}>
              <TextField
                sx={styledInput}
                autoFocus
                value={name1}
                onChange={(event) => setName1(event.target.value)}
                label="Nome"
                fullWidth
                variant="outlined"
                placeholder="Placeholder"
                size="small"
              />
              <TextField
                sx={styledInput}
                value={name2}
                onChange={(event) => setName2(event.target.value)}
                label="Atribuição"
                fullWidth
                variant="outlined"
                size="small"
              />
            </Stack>
          </DialogContent>
          {qtdAssinatura !== 1 ? (
            <DialogContent>
              <DialogContentText>
                <div className="p-10 flex flex-col align-center justify-center text-gray-500">
                  <div className="mb-2">
                    <Divider sx={{ bgcolor: "#000000" }} />
                  </div>
                  <p className="text-center font-medium">{name3}</p>
                  <p className="text-center">{name4}</p>
                </div>
              </DialogContentText>

              <Stack spacing={2}>
                <TextField
                  sx={styledInput}
                  autoFocus
                  value={name3}
                  onChange={(event) => setName3(event.target.value)}
                  label="Nome"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
                <TextField
                  sx={styledInput}
                  value={name4}
                  onChange={(event) => setName4(event.target.value)}
                  label="Atribuição"
                  fullWidth
                  variant="outlined"
                  size="small"
                />
              </Stack>
            </DialogContent>
          ) : null}
        </div>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="inherit"
            onClick={() => {
              handleAssinaturaClick();
              setQtdAssinatura(0);
            }}
          >
            Cancelar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={handleAssinaturaClick}
          >
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={openDescricao}
        onClose={handleDescricaoClick}
        maxWidth="lg"
      >
        <DialogTitle>Descrição</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Descreva o objetivo do certificado aqui
          </DialogContentText>
          <TextField
            // sx={styledInput}
            sx={{ width: 600 }}
            rows={5}
            autoFocus
            multiline
            value={descricao}
            onChange={(event) => {
              setDescricao(event.target.value);
            }}
            margin="dense"
            label="Texto"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="inherit"
            onClick={() => {
              setDescricao("");
            }}
          >
            Limpar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={handleDescricaoClick}
          >
            aplicar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={openCampus}
        onClose={handleCampusClick}
        maxWidth="lg"
      >
        <DialogTitle>Campus</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione o Campus Universitário.
          </DialogContentText>
          <Stack mt={2} spacing={1.2}>
            <FormControl sx={{ width: 600 }}>
              <InputLabel>Campus</InputLabel>
              <Select
                value={campus}
                label="Campus"
                onChange={handleSelectCampus}
              >
                <MenuItem value={"Alta Floresta"}>Alta Floresta</MenuItem>
                <MenuItem value={"Alto Araguaia"}>Alto Araguaia</MenuItem>
                <MenuItem value={"Barra do Bugres"}>Barra do Bugres</MenuItem>
                <MenuItem value={"Cáceres"}>Cáceres</MenuItem>
                <MenuItem value={"Colíder"}>Colíder</MenuItem>
                <MenuItem value={"Diamantino"}>Diamantino</MenuItem>
                <MenuItem value={"Juara"}>Juara</MenuItem>
                <MenuItem value={"Médio Araguaia"}>Médio Araguaia</MenuItem>
                <MenuItem value={"Nova Mutum"}>Nova Mutum</MenuItem>
                <MenuItem value={"Nova Xavantina"}>Nova Xavantina</MenuItem>
                <MenuItem value={"Pontes e Lacerda"}>Nova Xavantina</MenuItem>
                <MenuItem value={"Sinop"}>Sinop</MenuItem>
                <MenuItem value={"Tangará da Serra"}>Tangará da Serra</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="inherit"
            onClick={() => {
              setOpenCampus(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={() => {
              setOpenCampus(false);
            }}
          >
            aplicar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={openCurso}
        onClose={handleCursoClick}
        maxWidth="lg"
      >
        <DialogTitle>Curso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecione o Curso do certificado.
          </DialogContentText>
          <Stack mt={2} spacing={1.2}>
            <FormControl sx={{ width: 600 }}>
              <InputLabel>Curso</InputLabel>
              <Select value={curso} label="Campus" onChange={handleSelectCurso}>
                <MenuItem value={"Curso de Administraçao"}>
                  Administraçao
                </MenuItem>
                <MenuItem value={"Curso de Agronomia"}>Agronomia</MenuItem>
                <MenuItem value={"Curso de Arquetura e Urbanismo"}>
                  Arquetura e Urbanismo
                </MenuItem>
                <MenuItem value={"Curso de Ciências Biologicas"}>
                  Ciências Biologicas
                </MenuItem>
                <MenuItem value={"Curso de Ciência da Computação"}>
                  Ciencia da Computação
                </MenuItem>
                <MenuItem value={"Curso de Ciências Contabéis"}>
                  Ciências Contabéis
                </MenuItem>
                <MenuItem value={"Curso de Ciências Economicas"}>
                  Ciências Economicas
                </MenuItem>
                <MenuItem value={"Curso de Direito"}>Direito</MenuItem>
                <MenuItem value={"Curso de Educação Física"}>
                  Ed. Física
                </MenuItem>
                <MenuItem value={"Curso de Enfermagem"}>Enfermagem</MenuItem>
                <MenuItem value={"Curso de Engenharia Civil"}>
                  Engenharia Civil
                </MenuItem>
                <MenuItem value={"Curso de Engenharia de Alimentos"}>
                  Engenharia de Alimentos
                </MenuItem>
                <MenuItem value={"Curso de Eng. Agro Industrial"}>
                  Eng. Agro Industrial
                </MenuItem>
                <MenuItem value={"Curso de Engenharia Elétrica"}>
                  Engenharia Elétrica
                </MenuItem>
                <MenuItem value={"Curso de Engenharia Florestal"}>
                  Engenharia Florestal
                </MenuItem>
                <MenuItem value={"Curso de Geografia"}>Geografia</MenuItem>
                <MenuItem value={"Curso de Historia"}>História</MenuItem>
                <MenuItem value={"Curso de Jornalismo"}>Jornalismo</MenuItem>
                <MenuItem value={"Curso de Letras"}>Letras</MenuItem>
                <MenuItem value={"Curso de Matemática"}>Matemática</MenuItem>
                <MenuItem value={"Curso de Medicina"}>Medicina</MenuItem>
                <MenuItem value={"Curso de Pedagogia"}>Pedagogia</MenuItem>
                <MenuItem value={"Curso de Sistemas de Informação"}>
                  Sistemas de Informação
                </MenuItem>
                <MenuItem value={"Curso de Turismo"}>Turismo</MenuItem>
                <MenuItem value={"Curso de Zootenia "}>Zootenia</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="inherit"
            onClick={() => {
              setOpenCurso(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={() => {
              setOpenCurso(false);
            }}
          >
            aplicar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        TransitionComponent={Transition}
        keepMounted
        open={openBanca}
        onClose={handleBancaClick}
        maxWidth="lg"
      >
        <DialogTitle>Banca Avaliadora</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Descreva os professores que integram a banca avaliadora.
          </DialogContentText>
          <Stack mt={2} spacing={1.5}>
            <TextField
              sx={styledInput}
              autoFocus
              value={name5}
              onChange={(event) => setName5(event.target.value)}
              label="Presidente da Banca"
              fullWidth
              variant="outlined"
              placeholder="Nome completo"
              size="small"
            />
            <TextField
              sx={styledInput}
              autoFocus
              value={name6}
              label="Orientadora(o)"
              onChange={(event) => setName6(event.target.value)}
              fullWidth
              variant="outlined"
              placeholder="Nome completo"
              size="small"
            />
            <TextField
              sx={styledInput}
              autoFocus
              value={name7}
              onChange={(event) => setName7(event.target.value)}
              label="Avaliador I"
              fullWidth
              variant="outlined"
              placeholder="Nome completo"
              size="small"
            />
            <TextField
              sx={styledInput}
              autoFocus
              value={name8}
              onChange={(event) => setName8(event.target.value)}
              label="Avaliador II"
              fullWidth
              variant="outlined"
              placeholder="Nome completo"
              size="small"
            />
            <TextField
              sx={styledInput}
              autoFocus
              value={name9}
              onChange={(event) => setName9(event.target.value)}
              label="Avaliador III"
              fullWidth
              variant="outlined"
              placeholder="Nome completo"
              size="small"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="error"
            onClick={() => {
              setViewBanca(false);
              setOpenBanca(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            color="inherit"
            onClick={() => {
              setName5("");
              setName6("");
              setName7("");
              setName8("");
              setName9("");
            }}
          >
            Limpar
          </Button>
          <Button
            sx={{ textTransform: "capitalize" }}
            variant="contained"
            onClick={() => {
              if (
                name5 === "" &&
                name6 === "" &&
                name7 === "" &&
                name8 === "" &&
                name9 === ""
              ) {
                setViewBanca(false);
                setOpenBanca(false);
                console.log("inputs vazios");
              } else {
                setOpenBanca(false);
                console.log("fechar apenas modal");
              }
            }}
          >
            Aplicar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
